import re

# File paths (update if your paths are different)
tier1_path = "Vocabulary/Tier 1.md"
oxford3000_path = "Vocabulary/Oxford 3000.md"
tier2_path = "Vocabulary/Tier 2.md"
tier3_path = "Vocabulary/Tier 3.md"


def load_words(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return set(line.strip().lower() for line in f if line.strip())


def save_words(filepath, words):
    with open(filepath, "w", encoding="utf-8") as f:
        for word in sorted(words):
            f.write(word + "\n")


def singularize(word):
    # Simple English pluralization rules
    if word.endswith('ies'):
        return word[:-3] + 'y'
    if word.endswith('es'):
        if word[-3:-2] in 'sxz' or word[-4:-2] in ['', 'ch']:
            return word[:-2]
    if word.endswith('s') and not word.endswith('ss'):
        return word[:-1]
    return word


# Load all words
tier1 = load_words(tier1_path)
oxford3000 = load_words(oxford3000_path)
tier2 = load_words(tier2_path)
tier3 = load_words(tier3_path)
all_tier1_2 = tier1 | tier2 | oxford3000

# Remove from Tier 3 if their singular or plural is in Tier 1 or Tier 2
cleaned_tier3 = set()
for word in tier3:
    singular = singularize(word)
    plural = word + 's' if not word.endswith('s') else word
    if (word not in all_tier1_2 and singular not in all_tier1_2 and plural not in all_tier1_2):
        cleaned_tier3.add(word)

# Save the cleaned Tier 3
save_words(tier3_path, cleaned_tier3)

print(f"Tier 3 cleaned! {len(tier3) - len(cleaned_tier3)} words removed (including plurals).")
