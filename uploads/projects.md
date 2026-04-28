---

**Telegram-Notion AI Task Manager**

A fully cloud-native productivity system that bridges Telegram and Notion through an intelligent AI agent, allowing users to capture and organize tasks from any type of input — text, voice messages, or images — directly into their personal Notion workspace.

The core challenge this project solves is the friction between capturing ideas in the moment and actually getting them into a structured task management system. Instead of manually creating tasks, the bot understands natural language and context, extracts what matters, and creates rich, well-organized entries in Notion automatically.

The system is built in Python and deployed on Railway, with a PostgreSQL database on Neon for multi-user management. Under the hood, it uses OpenAI's GPT models for intelligent processing across three input modalities: text messages are parsed for stakeholders, deadlines, and intent; voice notes are transcribed and contextually enriched; and images go through an 11-category classification pipeline (receipts, screenshots, handwritten notes, diagrams, documents, and more), each routed to a specialized prompt for maximum accuracy.

Key technical highlights include a multi-stage image processing pipeline with automatic category detection, universal multilingual support with language-consistent output, a secure invitation-code onboarding system with per-user Notion database isolation, and an AI-powered task completion matching system triggered via chat commands.

The project evolved from a local Raspberry Pi prototype to a fully managed cloud architecture (v3.5), demonstrating the ability to iterate on a real system, handle infrastructure decisions, and design for scalability and reliability — going from a personal tool to a multi-user platform ready for production.

---

Feel free to ask me to adjust the tone (more technical, more concise, more storytelling-focused), the length, or any specific aspect you'd like to highlight differently.


Link to the project site:

https://web-production-e3419.up.railway.app/