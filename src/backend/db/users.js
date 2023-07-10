import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { posts } from "./posts";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    img:"https://bit.ly/sage-adebayo",
    fullName: "Adarsh",
    username: "adarshbalika",
    email:"testing@yopmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmark:[
      {
        _id: uuid(),
        fullName: "Adarsh Balika",
        img:"https://bit.ly/sage-adebayo",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: "adarshbalika",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        
        fullName: "Krishna ",
        img:"https://bit.ly/code-beast",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: "krishna",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        fullName: "Ajay Kumar",
        img:"https://bit.ly/ryan-florence",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: "ajaykumar",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ]
  },
  {
    _id: uuid(),
    img:"https://bit.ly/code-beast",
    fullName: "Krishna ",
    username: "krishna",
    email:"krishna@gmail.com",
    password: "krishna123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    
  },
  {
    _id: uuid(),
    img:"https://bit.ly/ryan-florence",
    fullName: "Ajay Kumar",
    username: "ajaykumar",
    email:"ajay@gmail.com",
    password: "ajay123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  
  },
];
