import os
import re
from collections import Counter

LESSONS_DIR = os.path.join(os.path.dirname(__file__), '..', 'Lessons')
GLOSSARY_DIR = os.path.join(os.path.dirname(__file__), '..', 'Glossary')
TIER3_PATH = os.path.join(os.path.dirname(__file__), 'Tier 3.txt')

# Read Tier 3 words (assume one per line, ignore markdown formatting)
with open(TIER3_PATH, encoding='utf-8') as f:
    tier3_words = [line.strip().lower() for line in f if line.strip() and not line.startswith('#')]

used_words = set()

if not os.path.exists(GLOSSARY_DIR):
    os.makedirs(GLOSSARY_DIR)

for lesson_file in os.listdir(LESSONS_DIR):
    if not lesson_file.endswith('.md'):
        continue
    lesson_path = os.path.join(LESSONS_DIR, lesson_file)
    with open(lesson_path, encoding='utf-8') as f:
        text = f.read().lower()
    # Count occurrences of each Tier 3 word
    word_counts = {}
    for word in tier3_words:
        if word in used_words:
            continue
        # Use word boundaries to avoid partial matches
        count = len(re.findall(r'\b{}\b'.format(re.escape(word)), text))
        if count > 0:
            word_counts[word] = count
    # Select up to 3 frequent, non-repeated words
    top_words = [w for w, _ in Counter(word_counts).most_common(3)]
    # Mark these words as used
    used_words.update(top_words)
    # Write glossary file
    glossary_path = os.path.join(GLOSSARY_DIR, lesson_file)
    with open(glossary_path, 'w', encoding='utf-8') as f:
        f.write("## Glossary\n")
        for word in top_words:
            f.write(f"\n![[Vocabulary/Tier 3#{word}]]\n")
