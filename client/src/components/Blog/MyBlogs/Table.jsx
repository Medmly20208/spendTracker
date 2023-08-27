import React, { useState } from "react";

//iconify
import { Icon } from "@iconify/react";

//components
import Modal from "../../Modal";
import { DeleteBlog } from "./DeleteBlog";
import EditBlog from "./EditBlog";

const Table = (props) => {
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const [isEditBlogModalOpened, setIsBlogEditModalOpened] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const openDeleteModal = () => setIsDeleteModalOpened(true);
  const closeDeleteModal = () => setIsDeleteModalOpened(false);

  const openEditModal = () => setIsBlogEditModalOpened(true);
  const closeEditModal = () => setIsBlogEditModalOpened(false);

  return (
    <div className="overflow-auto w-full mt-[20px]">
      <table className="w-full min-w-[400px] max-h-[100px] overflow-auto">
        <thead className="border-b-2 bg-gray-100 dark:bg-secondary-black">
          <tr>
            <th className="p-[1em]">blog title</th>
            <th className="p-[1em]">blog content</th>
            <th className="p-[1em]">img url</th>
            <th className="p-[1em]">Date</th>
            <th className="p-[1em]">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td className="text-center p-[1em]">
              How to invest money properly
            </td>
            <td className="text-center p-[1em]">so to start this blog...</td>
            <td className="text-center p-[1em]">https://fb.Com</td>
            <td className="text-center p-[1em]">{"01-01-2023"}</td>
            <td className="text-center flex justify-center items-center gap-[5px]  p-[1em]">
              <Icon
                icon="material-symbols:delete-outline"
                className="text-red-600 cursor-pointer"
                onClick={() => {
                  openDeleteModal();
                }}
              />
              <Icon
                icon="material-symbols:edit"
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  openEditModal();
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {isDeleteModalOpened && (
        <Modal onClose={closeDeleteModal}>
          <DeleteBlog onClose={closeDeleteModal} id={selectedId} />
        </Modal>
      )}

      {isEditBlogModalOpened && (
        <Modal onClose={closeEditModal}>
          <EditBlog onClose={closeEditModal} id={selectedId} />
        </Modal>
      )}
    </div>
  );
};

export default Table;
