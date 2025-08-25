# Todo List

A simple, clean and intuitive todo list application that helps you organize your daily tasks and boost productivity.

## Features

- ✅ **Add Tasks** - Create new tasks with ease
- ✏️ **Edit Tasks** - Modify existing tasks
- ✅ **Mark Complete** - Mark tasks as completed
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 🔍 **Filter Tasks** - View all, completed, or pending tasks
- 💾 **Persistent Storage** - Your tasks are saved locally
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Clean UI** - Minimalist and user-friendly interface

## Demo

[Live Demo](https://thalesmar.github.io/Todo-List/) *(Replace with your actual demo link)*

## Screenshots ![image](https://github.com/Thalesmar/Todo-List/blob/e1f5884c04eb2bf7435b3b8d8058506f3fd6c545/image.png)

*Add screenshots of your application here*

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Local Storage
- **Icons**: Font Awesome / Custom Icons
- **Styling**: CSS Grid/Flexbox for responsive layout

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Thalesmar/Todo-List.git
```

2. Navigate to the project directory:
```bash
cd Todo-List
```

3. Switch to the todoList branch:
```bash
git checkout todoList
```

4. Open `index.html` in your web browser or serve it using a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Or simply open index.html in your browser
```

## Usage

1. **Adding a Task**: 
   - Type your task in the input field
   - Press Enter or click the "Add" button

2. **Marking as Complete**: 
   - Click the checkbox next to any task to mark it as completed

3. **Editing a Task**: 
   - Double-click on a task or click the edit icon
   - Make your changes and press Enter to save

4. **Deleting a Task**: 
   - Click the delete/trash icon next to the task

5. **Filtering Tasks**: 
   - Use the filter buttons to show all, active, or completed tasks

## Project Structure

```
Todo-List/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   └── images/         # Images and icons
└── README.md           # Project documentation
```

## Code Example

Here's a basic example of how tasks are managed:

```javascript
// Add a new task
function addTask(taskText) {
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
}

// Toggle task completion
function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}
```

## Features in Detail

### Local Storage
All tasks are automatically saved to your browser's local storage, ensuring your tasks persist between sessions.

### Responsive Design
The application is fully responsive and works seamlessly across different screen sizes and devices.

### Keyboard Shortcuts
- `Enter` - Add new task or save edits
- `Escape` - Cancel editing
- `Delete` - Remove selected task

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Future Enhancements

- [ ] Add due dates and reminders
- [ ] Categories and tags
- [ ] Dark/Light theme toggle
- [ ] Task priority levels
- [ ] Import/Export functionality
- [ ] Drag and drop reordering
- [ ] Search functionality
- [ ] Task notes and descriptions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Thalesmar**
- GitHub: [@Thalesmar](https://github.com/Thalesmar)
- Repository: [Todo-List](https://github.com/Thalesmar/Todo-List)

## Acknowledgments

- Inspired by modern task management applications
- Thanks to the open-source community for continuous inspiration
- Special thanks to contributors who help improve this project

---

⭐ If you found this project helpful, please give it a star on GitHub!

## Contact

If you have any questions or suggestions, feel free to:
- Open an issue on GitHub
- Contact me through my GitHub profile

---

*Happy task managing! 📝✅*
