import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';

export const ReviewContext = createContext();

export const ReviewContextProvider = ({ children }) => {
    const { cookies } = useContext(AuthContext);
    const token = cookies.accessToken;
    const queryClient = useQueryClient();

    async function getReviews(productId) {

        try {
            const response = await axios.get(`https://e-prova.vercel.app/Product/${productId}/review/all-reviews`);
            return response.data;
        } catch (_error) {
            toast.error("Failed to fetch reviews");
            return { data: [] };
        }
    }

    async function addReview(productId, comment, rating) {
        if (!token) {
            toast.error("Please login to add a review");
            throw new Error("Authentication required");
        }


        if (typeof comment !== 'string' || !comment.trim()) {
            toast.error("Review comment is required");
            throw new Error("Invalid comment");
        }

        if (typeof rating !== 'number' || rating < 1 || rating > 5) {
            toast.error("Rating must be between 1 and 5");
            throw new Error("Invalid rating");
        }

        try {
            const response = await axios.post(
                `https://e-prova.vercel.app/Product/${productId}/review/create-review`,
                {
                    comment: comment.trim(),
                    rating: Number(rating),
                    productId: productId // explicitly include productId in the body
                },
                {
                    headers: {
                        token,
                    },
                }
            );
            await queryClient.invalidateQueries(['reviews', productId]);
            toast.success("Review added successfully");
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to add review";
            toast.error(errorMessage);
            throw error;
        }
    }

    const value = {
        getReviews,
        addReview
    };

    return (
        <ReviewContext.Provider value={value}>
            {children}
        </ReviewContext.Provider>
    );
};

ReviewContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
