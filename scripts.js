document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const author = document.getElementById('author').value;
    const comment = document.getElementById('comment').value;
    const dateTime = new Date().toLocaleString();

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <p class="comment-author">${author}</p>
        <p class="comment-text">${comment}</p>
        <p class="comment-time">${dateTime}</p>
        <span class="reply-button" onclick="showReplyForm(this)">Reply</span>
        <ul class="reply-list"></ul>
    `;

    // Append the list item to the comment list
    document.getElementById('commentList').appendChild(li);

    // Clear the form
    document.getElementById('commentForm').reset();
});

function showReplyForm(button) {
    const replyForm = document.createElement('form');
    replyForm.classList.add('reply-form');
    replyForm.innerHTML = `
        <div class="form-group">
            <label for="replyAuthor">Name:</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="replyComment">Reply:</label>
            <textarea class="form-control" rows="2" required></textarea>
        </div>
        <button type="submit" class="btn btn-secondary btn-sm">Submit</button>
    `;

    replyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the input values
        const replyAuthor = this.querySelector('input').value;
        const replyComment = this.querySelector('textarea').value;
        const dateTime = new Date().toLocaleString();

        // Create a new reply list item
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="comment-author">${replyAuthor}</p>
            <p class="comment-text">${replyComment}</p>
            <p class="comment-time">${dateTime}</p>
        `;

        // Append the reply to the reply list
        button.nextElementSibling.appendChild(li);

        // Remove the reply form
        this.remove();
    });

    button.parentNode.appendChild(replyForm);
}