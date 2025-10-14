body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #74ebd5, #ACB6E5);
    margin: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #333;
    color: white;
}

header h1 { margin:0; }

nav input, nav select, nav button {
    margin-left: 10px;
    padding: 5px 10px;
    border-radius:5px;
    border:none;
    outline:none;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    padding: 20px;
}

.game-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    text-align: center;
    transition: transform 0.2s;
    overflow: hidden;
}

.game-card:hover { transform: scale(1.05); }

.game-card img { width: 100%; height: 120px; object-fit: cover; }

.game-card h3 { margin:10px 0; }

.game-card button {
    margin-bottom: 10px;
    padding: 10px 15px;
    border:none;
    border-radius:5px;
    background:#4CAF50;
    color:white;
    cursor:pointer;
    transition: background 0.2s;
}

.game-card button:hover { background:#45a049; }