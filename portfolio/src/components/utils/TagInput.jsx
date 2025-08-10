import React from "react";
import { WithContext as ReactTags } from "react-tag-input"

/*utility function for skills/tools. This makes the little tags in the UI which then easily converts to an array for my MongoDB attributes */

const KeyCodes = {
    comma: 188,
    enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function TagInput({ tags, setTags, placeholder }) {
    const handleDelete = (i) => {
        setTags(tags.filter((_, index) => index !== i));
    }
    const handleAdd = (tag) => {
        setTags([...tags, tag]);
    }

    const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
    };

    return (
        <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="bottom"
        placeholder={placeholder || "Add new tag"}
        />
    );

}

export default TagInput;

