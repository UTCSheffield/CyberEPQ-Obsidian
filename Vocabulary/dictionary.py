import requests
import time
import sys

INPUT_FILE = "Vocabulary/Tier 3.txt"
OUTPUT_FILE = "Vocabulary/Tier 3.md"


def get_definitions(word):
    # Free Dictionary API (not strictly UK, but free)
    url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
    try:
        resp = requests.get(url, timeout=5, verify=False)
        if resp.status_code == 200:
            data = resp.json()
            definitions = []
            for meaning in data[0].get("meanings", []):
                for d in meaning.get("definitions", []):
                    definitions.append(d.get("definition", ""))
            return definitions
    except Exception as e:
        print(f"Error for {word}: {e}")
        sys.exit(1)  # Stop the script on error
    return []


def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        words = [line.strip() for line in f if line.strip()]

    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        for word in words:
            out.write(f"## {word}\n\n")
            definitions = get_definitions(word)
            if definitions:
                for i, definition in enumerate(definitions, 1):
                    out.write(f"{i}. {definition}\n")
            else:
                out.write("_No definition found._\n")
            out.write("\n")
            time.sleep(0.5)  # Be polite to the API


if __name__ == "__main__":
    main()
