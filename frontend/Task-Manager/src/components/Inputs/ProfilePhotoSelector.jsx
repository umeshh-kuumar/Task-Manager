import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef();
    const [previewUrl, setPreviewUrl] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className='flex justify-center mb-6'>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
            />
            {!image ? (
                <div className='w-20 h-20 flex items-center justify-center'>
                    <LuUser className="w-16 h-16 text-gray-400" />
                    <button
                        type='button'
                        onClick={onChooseFile}
                        className="mt-2 text-blue-500 flex items-center gap-1">
                        <LuUpload />
                    </button>
                </div>
            ) : (
                <div className=''>
                    <img
                        src={previewUrl}
                        alt="Profile photo"
                        className="w-16 h-16 rounded-full object-cover" />
                    <button
                        type='button'
                        onClick={handleRemoveImage}
                        className="mt-2 text-red-500">
                        <LuTrash />
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProfilePhotoSelector