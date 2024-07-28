import React from 'react';
import ProjectGrid from './ProjectGrid';
import './App.css';
import { GraduationCap, Code, Palette, Microscope} from 'lucide-react';
// 这里粘贴您提供的 projects 和 colorSchemes 数据
export const colorSchemes = {
    default: {
        background: 'bg-[rgb(25,34,54)]',
        text: 'text-white',
        description: 'text-blue-200',
        button: 'bg-[rgb(170,37,62)] text-[rgb(255,255,255)] hover:bg-white hover:text-[rgb(170,37,62)]',
    },
    red: {
        background: 'bg-[rgb(170,37,62)]',
        text: 'text-white',
        description: 'text-red-200',
        button: 'bg-[rgb(25,34,54)] text-[rgb(255,255,255)] hover:bg-white hover:text-[rgb(25,34,54)]',
    },
    blue: {
        background: 'bg-blue-700',
        text: 'text-white',
        description: 'text-blue-200',
        button: 'bg-blue-500 hover:bg-blue-600',
    },
    green: {
        background: 'bg-green-700',
        text: 'text-white',
        description: 'text-green-200',
        button: 'bg-green-500 hover:bg-green-600',
    },
    purple: {
        background: 'bg-purple-700',
        text: 'text-white',
        description: 'text-purple-200',
        button: 'bg-purple-500 hover:bg-purple-600',
    },
    orange: {
        background: 'bg-orange-700',
        text: 'text-white',
        description: 'text-orange-200',
        button: 'bg-orange-500 hover:bg-orange-600',
    },
};

export const projects = [
    {
        id: 1,
        title: "AI Chatbot",
        student: "Alice Smith",
        category: "Computer Science",
        icon: Code,
        size: "tall",
        description: "An advanced AI chatbot that uses natural language processing to provide human-like conversations and assist with various tasks.",
        image: "/assests/WechatIMG56.jpg",
        color: "orange"

    },
    {
        id: 2,
        title: "Sustainable City",
        student: "Bob Johnson",
        category: "Environmental Science",
        icon: Palette,
        size: "wide",
        description: "A comprehensive model of a sustainable city, showcasing innovative green technologies and urban planning strategies.",
        image: "/assests/WechatIMG56.jpg",
        color: "red"
    },
    {
        id: 3,
        title: "Quantum Computing",
        student: "Charlie Brown",
        category: "Physics",
        icon: Microscope,
        size: "small",
        description: "A simulation of quantum computing principles, demonstrating the potential of qubits in solving complex problems.",
        image: "/assests/WechatIMG56.jpg"
    },
    {
        id: 4,
        title: "Language Learning",
        student: "Diana Prince",
        category: "Education",
        icon: GraduationCap,
        size: "small",
        description: "An interactive application that uses gamification to make language learning more engaging and effective.",
        image:"/assests/WechatIMG56.jpg",
        color: "green"
    },
    {
        id: 5,
        title: "Robotics Project",
        student: "Eva Green",
        category: "Engineering",
        icon: Code,
        size: "medium",
        description: "An autonomous robot designed to assist in household tasks, showcasing advancements in robotics and AI integration.",
        image: "/assests/WechatIMG56.jpg"
    },
    {
        id: 6,
        title: "Biodiversity Study",
        student: "Frank White",
        category: "Biology",
        icon: Microscope,
        size: "medium",
        description: "A comprehensive study of local ecosystem biodiversity, highlighting the importance of preserving various species in maintaining ecological balance.",
        image: "/assests/WechatIMG56.jpg"
    },
    {
        id: 7,
        title: "Open Source Web builder",
        student: "BobC",
        category: "Computer Science",
        icon: Code,
        size: "small",
        description: "Platform for students to present their work in and beyond Keystone community",
        image: "/assests/WechatIMG56.jpg",
        url: "https://jeremyztest.netlify.app/"
    },
    {
        id: 8,
        title: "Nepal Trip",
        student: "Baldeep",
        category: "Education",
        icon: Palette,
        size: "wide",
        description: "help kids in nepal, moonlight school"
    },
    {
        id: 9,
        title: "blablblab",
        student: "Baldeep",
        category: "Education",
        icon: Palette,
        size: "small",
        description: "help kids in nepal, moonlight school",
        image: "/api/placeholder/600/200"
    },
];

function App() {
    return (
        <div className="App">
            <h1>学生项目展示</h1>
            <ProjectGrid projects={projects} colorSchemes={colorSchemes} />
        </div>
    );
}

export default App;
