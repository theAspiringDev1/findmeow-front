import React from "react";
import { CreateBtn } from "components/shared/shared";
import Icon from "components/shared/Icon";
import { useNavigate } from "react-router-dom";

interface IProps {
    path: string;
}

const CreateButton: React.FC<IProps> = ({ path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };
    return (
        <CreateBtn onClick={handleClick}>
            <Icon name="add" />
            <span>Create</span>
        </CreateBtn>
    );
};

export default CreateButton;
