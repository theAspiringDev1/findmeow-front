// @ts-nocheck

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Image } from "cloudinary-react";

import PageWrapper from "components/shared/PageWrapper";
import { ProfileCard, ProfileMain, ProfilePosts, PostList } from "./styles";
import PetList from "components/PetList";
import { useAuth } from "contexts/AuthContext";
import api from "api";
import { PetDetails } from "types/ActionTypes";
import usePostCollection from "hooks/usePostCollectiion";
import Spinner from "components/Spinner";

interface IProps {}

const ProfilePage: React.FC<IProps> = () => {
    const { authState } = useAuth();
    const { user, userID } = authState;
    const { collection, isLoading } = usePostCollection(`/post/user/${userID}`);

    if (isLoading) return <Spinner />;

    return (
        <PageWrapper title="Profile">
            <ProfileMain>
                <ProfileCard>
                    <Image
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={user?.profileImg}
                        radius="max"
                        width="250"
                        height="250"
                    />
                    <h3>{user?.name}</h3>
                    <h4>{user?.location}</h4>
                    <h4>{user?.email}</h4>
                    <h4>{user?.contact}</h4>
                </ProfileCard>
                <ProfilePosts>
                    <h2>My Posts</h2>
                    <PetList
                        collection={collection}
                        additionalClass="fullWidth"
                        defaultColumns={2}
                    />
                </ProfilePosts>
            </ProfileMain>
        </PageWrapper>
    );
};

export default ProfilePage;
