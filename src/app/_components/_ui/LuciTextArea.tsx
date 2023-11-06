// src/app/_components/LuciTextArea.tsx
import { Textarea } from '@nextui-org/input';
import React from 'react';

type TextareaProps = React.ComponentProps<typeof Textarea>;

const LuciTextArea: React.FC<TextareaProps> = (props) => {
    return (
        <Textarea
        variant="flat"
        label="Description"
        placeholder="Enter your description"
        description="Enter a concise description of your project."
        className="max-w-xs"
            {...props}
        />
    );
};

export default LuciTextArea;