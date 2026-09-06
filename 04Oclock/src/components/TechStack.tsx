import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

export const TECH_CATEGORIES = [
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "#61DAFB",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI"],
    color: "#68A063",
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter"],
    color: "#02569B",
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "#336791",
  },
  {
    category: "AI & Intelligence",
    items: ["Generative AI", "LLM Integration", "AI Agents", "RAG", "Machine Learning", "NLP"],
    color: "#E5C158",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD", "Vercel"],
    color: "#FF9900",
  },
  {
    category: "APIs & Integration",
    items: ["REST API", "GraphQL", "WebSockets", "Webhooks", "Third-Party APIs"],
    color: "#E10098",
  },
  {
    category: "Design",
    items: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    color: "#F24E1E",
  },
  {
    category: "Testing",
    items: ["Jest", "Playwright", "Postman"],
    color: "#C21325",
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
    color: "#F05032",
  },
];

// Flatten all technologies into a list for 3D physics sphere rendering
const ALL_TECH_ITEMS = TECH_CATEGORIES.flatMap((cat) =>
  cat.items.map((name) => ({ name, color: cat.color }))
);

// Create custom canvas texture for each technology ball
const createTechCanvasTexture = (name: string, color: string): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Dark metallic radial gradient background
    const bgGrd = ctx.createRadialGradient(256, 256, 40, 256, 256, 256);
    bgGrd.addColorStop(0, "#1f1f2e");
    bgGrd.addColorStop(1, "#09090d");
    ctx.fillStyle = bgGrd;
    ctx.fillRect(0, 0, 512, 512);

    // Outer accent glowing ring
    ctx.beginPath();
    ctx.arc(256, 256, 226, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 14;
    ctx.shadowColor = color;
    ctx.shadowBlur = 25;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Subtle inner glass fill
    ctx.beginPath();
    ctx.arc(256, 256, 215, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.fill();

    // High-contrast clean white technology typography
    ctx.fillStyle = "#ffffff";
    ctx.font = "900 46px 'Geist', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,0.95)";
    ctx.shadowBlur = 12;

    const words = name.split(" ");
    if (words.length > 1 && name.length > 9) {
      ctx.fillText(words[0], 256, 220);
      ctx.fillText(words.slice(1).join(" "), 256, 285);
    } else {
      ctx.fillText(name, 256, 256);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(22), r(22) - 25, r(22) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const elem = document.querySelector(".techstack");
      if (elem) {
        const rect = elem.getBoundingClientRect();
        setIsActive(rect.top < window.innerHeight + 200 && rect.bottom > -200);
      } else {
        setIsActive(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Generate 3D materials for all 44 technologies
  const materials = useMemo(() => {
    return ALL_TECH_ITEMS.map((item) => {
      const texture = createTechCanvasTexture(item.name, item.color);
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.35,
        metalness: 0.4,
        roughness: 0.9,
        clearcoat: 0.2,
      });
    });
  }, []);

  const spheres = useMemo(() => {
    return ALL_TECH_ITEMS.map(() => ({
      scale: [0.75, 0.95, 0.85, 1, 0.9][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <div style={{ width: "100%", position: "relative", backgroundColor: "#000000", paddingBottom: "80px" }}>
      {/* 3D Physics Balls Section */}
      <div className="techstack">
        <h2>TECH STACKS WE USE</h2>

        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
          className="tech-canvas"
        >
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={materials[i % materials.length]}
                isActive={isActive}
              />
            ))}
          </Physics>
          <Environment
            files="/models/char_enviorment.hdr"
            environmentIntensity={0.5}
            environmentRotation={[0, 4, 2]}
          />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};

export default TechStack;
