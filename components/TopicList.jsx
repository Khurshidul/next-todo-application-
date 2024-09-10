import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import getAllTopics from "@/lib/getAllTopics";

const TopicList = async () => {
  const allTopics = await getAllTopics();
  return (
    <>
      {allTopics.map((topic) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between items-center"
          key={topic._id}
        >
          <div>
            <h1 className="text-2xl font-bold">{topic.title}</h1>
            <p>{topic.description}</p>
          </div>
          <div className="flex justify-between gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt className="text-teal-500	" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
