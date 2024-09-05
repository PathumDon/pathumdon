import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    api
      .get("/api/messages/")
      .then((res) => res.data)
      .then((data) => {
        setMessages(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => toast.success(err));
  };

  const deleteMessages = () => {
    api
      .delete(`/api/messages/${id}`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("message deleted");
          getMessages();
        } else {
          toast.error("failed to delete");
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <>
      <div className="container md:px-0 px-8 max-w-screen-xl mx-auto text-center pt-12">
        <div className="flex space-x-6 items-center">
          <h1 className="md:text-4xl text-2xl">Messages</h1>
        </div>

        <div className="flex mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {messages.map((message) => (
              <div
                className="shadow-lg rounded-lg text-left p-8 space-y-3"
                key={message.id}
              >
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Name</p>
                  <p className="font-semibold">{message.name}</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Email</p>
                  <a href={`mailto:${message.email}`} className="text-blue-500">
                    {message.email}
                  </a>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Subject</p>
                  <p className="font-semibold">{message.subject}</p>
                </div>

                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Message</p>
                  <p className="font-semibold">{message.message}</p>
                </div>

                <div className="px-4 py-2">
                  <button
                    type="button"
                    id="add-skill"
                    className="mt-1 ml-4 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => deleteMessages(message.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
