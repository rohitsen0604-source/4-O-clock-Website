
import json, glob

for f in glob.glob(r'C:\Users\Hp\.gemini\antigravity-ide\brain\8a8f97eb-736b-4167-8627-59b696fefa6a\.system_generated\logs\transcript*.jsonl'):
    with open(f, 'r', encoding='utf-8') as tf:
        for line in tf:
            if 'find_coeffs' in line:
                data = json.loads(line)
                print(f"File: {f} Step: {data.get('step_index')}")
                for tc in data.get('tool_calls', []):
                    cmd = tc.get('args', {}).get('CommandLine')
                    if cmd:
                        print("COMMAND:")
                        print(cmd)
                break
