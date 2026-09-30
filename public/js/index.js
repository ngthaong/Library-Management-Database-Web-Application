// Reset Popup JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const resetLink = document.getElementById('reset-link');
  const popup = document.getElementById('reset-popup');

  if (resetLink && popup) {
    resetLink.addEventListener('click', async (event) => {
      event.preventDefault(); 

      try {
        const res = await fetch('/reset', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const data = await res.json();

        if (data.success) {
          // Show the reset success popup
          popup.classList.remove('hidden');
          popup.classList.add('visible');

          // Hide the popup and reload page after 1.2 seconds
          setTimeout(() => {
            popup.classList.remove('visible');
            popup.classList.add('hidden');
            window.location.reload();
          }, 1200);
        } else {
          alert('Reset failed: ' + (data.error || 'Unknown error'));
        }

      } catch (err) {
        console.error('Reset error:', err);
        alert('Reset failed. Please try again.');
      }
    });
  }
});



// Search box JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('table-search');
    const tableRows = document.querySelectorAll('tbody tr');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const titleCell = row.querySelector('td:nth-child(2)');
            const titleText = titleCell.textContent.toLowerCase();

            if (titleText.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

// Update Books
document.addEventListener('DOMContentLoaded', function () {

  // Attach click event to all update buttons
  document.querySelectorAll('.update-button').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');

      const bookId = row.dataset.bookId;
      const authorId = row.dataset.authorId;
      const title = row.children[1].textContent;
      const description = row.children[3].textContent;
      const isbn = row.children[4].textContent;

      // Fill modal fields
      document.getElementById('update_book_id').value = bookId;
      document.getElementById('update_title').value = title;
      document.getElementById('update_description').value = description;
      document.getElementById('update_isbn').value = isbn;
      document.getElementById('update_author_id').value = authorId;

      // Show modal
      document.getElementById('updateModal').style.display = 'block';
    });
  });

  // Optional: Click outside the modal to close it
  window.onclick = function(event) {
    const modal = document.getElementById('updateModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});


// Update Customers
document.querySelectorAll('.update-customer-button').forEach(button => {
  button.addEventListener('click', () => {
    const row = button.closest('tr');

    document.getElementById('update_customer_id').value = row.dataset.customerId;
    document.getElementById('update_customer_family_name').value = row.dataset.familyName;
    document.getElementById('update_customer_given_name').value = row.dataset.givenName;
    document.getElementById('update_customer_DOB').value = row.dataset.dateOfBirth;

    document.getElementById('customerUpdateModal').style.display = 'block';
  });
});

// Update Author
document.querySelectorAll('.update-author-button').forEach(button => {
  button.addEventListener('click', () => {
    const row = button.closest('tr');
    document.getElementById('update_author_id').value = row.dataset.authorId;
    document.getElementById('update_author_family_name').value = row.dataset.familyName;
    document.getElementById('update_author_given_name').value = row.dataset.givenName;
    document.getElementById('authorUpdateModal').style.display = 'block';
  });
});

// Update Genre
document.querySelectorAll('.update-genre-button').forEach(button => {
  button.addEventListener('click', () => {
    const row = button.closest('tr');
    document.getElementById('update_genre_id').value = row.dataset.genreId;
    document.getElementById('update_genre_category').value = row.dataset.genreCategory;
    document.getElementById('genreUpdateModal').style.display = 'block';
  });
});

// Update Check out
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('checkedOutUpdateModal');

  document.querySelectorAll('.update-checkedout-button').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');

      const bookId = row.getAttribute('data-book-id');
      const customerId = row.getAttribute('data-customer-id');
      const days = row.getAttribute('data-days');
      const returnDate = row.getAttribute('data-return-date');
      const extension = row.getAttribute('data-extension');

      // Set values in modal form
      document.getElementById('update_book_id').value = bookId;
      document.getElementById('update_customer_id').value = customerId;
      document.getElementById('update_days').value = days;
      document.getElementById('update_return_date').value = returnDate;
      document.getElementById('update_extension').value = extension;

      // Set original keys for WHERE clause
      document.getElementById('update_customer_id_original').value = customerId;
      document.getElementById('update_book_id_original').value = bookId;

      modal.style.display = 'block';
    });
  });
});

// Update Authors Genres Intersect
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('authorsGenresUpdateModal');

  document.querySelectorAll('.update-authors-genres-button').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');

      const id = row.getAttribute('data-id');
      const authorId = row.getAttribute('data-author-id');
      const genreId = row.getAttribute('data-genre-id');

      document.getElementById('update_intersect_id').value = id;
      document.getElementById('update_author_id').value = authorId;
      document.getElementById('update_genre_id').value = genreId;

      modal.style.display = 'block';
    });
  });
});


// Update Books Authors Intersect
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('booksAuthorsUpdateModal');

  document.querySelectorAll('.update-books-authors-button').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');

      const id = row.getAttribute('data-id');
      const bookId = row.getAttribute('data-book-id');
      const authorId = row.getAttribute('data-author-id');

      document.getElementById('update_intersect_id').value = id;
      document.getElementById('update_book_id').value = bookId;
      document.getElementById('update_author_id').value = authorId;

      modal.style.display = 'block';
    });
  });
});


// Update Books Genres Intersect
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('booksGenresUpdateModal');

  document.querySelectorAll('.update-books-genres-button').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');

      const id = row.getAttribute('data-id');
      const bookId = row.getAttribute('data-book-id');
      const genreId = row.getAttribute('data-genre-id');

      // Set hidden intersect ID
      document.getElementById('update_intersect_id').value = id;

      // Set selected book ID in dropdown
      const bookSelect = document.getElementById('update_book_id');
      if (bookSelect) bookSelect.value = bookId;

      // Set selected genre ID in dropdown
      const genreSelect = document.getElementById('update_genre_id');
      if (genreSelect) genreSelect.value = genreId;

      // Show the modal
      modal.style.display = 'block';
    });
  });
});










