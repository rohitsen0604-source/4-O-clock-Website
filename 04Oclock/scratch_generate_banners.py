import os
from PIL import Image, ImageDraw, ImageFilter

def create_showcase_banner(
    input_image_path,
    output_image_path,
    crop_bottom=0,
    bg_color=(10, 10, 14),
    oval_color=(175, 45, 105),
    width=1200,
    height=800,
    card_w=1000,
    card_h=530,
    corner_radius=20,
    shadow_offset=(0, 20),
    shadow_blur=30,
    shadow_opacity=0.65,
    border_color=(45, 45, 55, 180),
    border_width=2
):
    # 1. Base dark canvas
    canvas = Image.new("RGBA", (width, height), bg_color + (255,))

    # 2. Draw brand background oval
    oval_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    oval_draw = ImageDraw.Draw(oval_img)
    
    margin_x = (width - 1060) // 2
    margin_y = (height - 720) // 2
    oval_box = [margin_x, margin_y, width - margin_x, height - margin_y]
    oval_draw.ellipse(oval_box, fill=oval_color + (255,))
    
    canvas.paste(oval_img, (0, 0), oval_img)

    # 3. Load screenshot image & crop taskbar if specified
    raw_ss = Image.open(input_image_path).convert("RGBA")
    sw, sh = raw_ss.size
    if crop_bottom > 0 and sh > crop_bottom:
        raw_ss = raw_ss.crop((0, 0, sw, sh - crop_bottom))
    
    resized_ss = raw_ss.resize((card_w, card_h), Image.Resampling.LANCZOS)

    # 4. Rounded mask
    mask = Image.new("L", (card_w, card_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, card_w, card_h], radius=corner_radius, fill=255)

    # 5. Drop shadow
    shadow_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)
    
    card_x = (width - card_w) // 2
    card_y = (height - card_h) // 2
    
    shadow_box = [
        card_x + shadow_offset[0],
        card_y + shadow_offset[1],
        card_x + card_w + shadow_offset[0],
        card_y + card_h + shadow_offset[1]
    ]
    shadow_color = (0, 0, 0, int(255 * shadow_opacity))
    shadow_draw.rounded_rectangle(shadow_box, radius=corner_radius, fill=shadow_color)
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    canvas.paste(shadow_img, (0, 0), shadow_img)

    # 6. Card container
    card_container = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
    card_container.paste(resized_ss, (0, 0), mask)

    if border_width > 0:
        border_draw = ImageDraw.Draw(card_container)
        border_draw.rounded_rectangle(
            [0, 0, card_w - 1, card_h - 1],
            radius=corner_radius,
            outline=border_color,
            width=border_width
        )

    canvas.paste(card_container, (card_x, card_y), card_container)

    # Output final RGB JPEG
    final_rgb = Image.new("RGB", (width, height), bg_color)
    final_rgb.paste(canvas, (0, 0), canvas)
    final_rgb.save(output_image_path, "JPEG", quality=96)
    print(f"Generated showcase banner: {output_image_path}")

# PrettyNbeauty Showcase Banner
create_showcase_banner(
    input_image_path=r"C:\Users\Hp\.gemini\antigravity-ide\brain\8a8f97eb-736b-4167-8627-59b696fefa6a\.user_uploaded\media_1788759706438.png",
    output_image_path=r"c:\Users\Hp\.gemini\antigravity-ide\scratch\4-O-clock-Website\04Oclock\public\Projects\prettynbeauty.jpg",
    crop_bottom=40, # Clean crop Windows taskbar
    bg_color=(12, 10, 16),
    oval_color=(175, 45, 105),
    border_color=(60, 20, 40, 200)
)

# BABA Dairy Showcase Banner
create_showcase_banner(
    input_image_path=r"C:\Users\Hp\.gemini\antigravity-ide\brain\8a8f97eb-736b-4167-8627-59b696fefa6a\.user_uploaded\media_1788759959326.png",
    output_image_path=r"c:\Users\Hp\.gemini\antigravity-ide\scratch\4-O-clock-Website\04Oclock\public\Projects\baba.jpg",
    crop_bottom=0,
    bg_color=(10, 12, 20),
    oval_color=(28, 100, 180),
    border_color=(15, 50, 100, 200)
)
