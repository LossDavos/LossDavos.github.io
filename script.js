function showSongs(day) {
    const songs = {
      'Zeleny Stvrtok': ['Song 1', 'Song 2', 'Song 3'],
      'Velky Piatok': ['Song A', 'Song B', 'Song C'],
      'Biela Sobota': ['Song X', 'Song Y', 'Song Z'],
      'Velkonocna Nedela': ['Song I', 'Song II', 'Song III']
    };
  
    const songCards = document.getElementById('songCards');
    songCards.innerHTML = '';
  
    songs[day].forEach(song => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3');
      card.innerHTML = `
        <div class="card-header">${song}</div>
        <div class="card-body">
          <p>This is the expanded text for ${song}.</p>
        </div>
      `;
      card.addEventListener('click', function() {
        $(this).find('.card-body').slideToggle();
      });
      songCards.appendChild(card);
    });
  }
  