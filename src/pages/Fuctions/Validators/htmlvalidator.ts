function hasUnclosedTags(html: string): boolean {
    const tagRegex = /<([a-zA-Z]+)(?:\s[^>]*)?>|<\/([a-zA-Z]+)>/g;
    const openTags: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = tagRegex.exec(html)) !== null) {
        const openingTag = match[1];
        const closingTag = match[2];

        if (openingTag) {
            openTags.push(openingTag.toLowerCase());
        } else if (closingTag) {
            const lastOpenTag = openTags.pop();
            if (!lastOpenTag || lastOpenTag !== closingTag.toLowerCase()) {
                return true; // Closing tag without corresponding opening tag
            }
        }
    }

    return openTags.length > 0; // Any remaining unclosed tags
}

  export {hasUnclosedTags};