import React from "react";

const commentsData = [
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [
      {
        name: "Akhil",
        text: "Lorem ipsum dolar  sit amet, consectetur adip",
        replies: [
          {
            name: "Akhil",
            text: "Lorem ipsum dolar  sit amet, consectetur adip",
            replies: [
              {
                name: "Akhil",
                text: "Lorem ipsum dolar  sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akhil",
                    text: "Lorem ipsum dolar  sit amet, consectetur adip",
                    replies: [],
                  },
                  {
                    name: "Akhil",
                    text: "Lorem ipsum dolar  sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akhil",
    text: "Lorem ipsum dolar  sit amet, consectetur adip",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAUttps://t3.ftcdn.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAU/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
