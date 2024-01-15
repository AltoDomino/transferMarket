const fetchData = async (playerId) => {
    try {
        const response = await fetch(`https://www.transfermarkt.com/ceapi/marketValueDevelopment/graph/${playerId}`);
        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${response.status}`);
        }

        console.log(response); // Dodaj to, aby zobaczyć szczegóły odpowiedzi

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
        throw error;
    }
};

module.exports = { fetchData };
