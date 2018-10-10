// coming soon game - https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/release_dates/?fields=*&filter[platform][eq]=48&order=date:asc&filter[date][gt]=1500619813000&expand=game

//genres id list with names   - (filtered with genres) https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=id,name&filter[genres][eq]=2&order=popularity:desc

//  https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&filter[platform][eq]=${id}&order=popularity:desc&min&limit=50

// search from query  https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=call%20of%20duty&fields=id,name,cover,category,genres,rating,summary,videos,platforms,publishers,popularity&order=popularity:desc

    

const ids = [
    {id: 2, name: "Point-and-click"},
    {id: 4, name: "Fighting"},
    {id: 5, name: "Shooter"},
    {id: 7, name: "Music"},
    {id: 8, name: "Platform"},
    {id: 9, name: "Puzzle"},
    {id: 10, name: "Racing"},
    {id: 11, name: "Real Time Strategy (RTS)"},
    {id: 12, name: "Role-playing (RPG)"},
    {id: 13, name: "Simulator"},
    {id: 14, name: "Sport"},
    {id: 15, name: "Strategy"},
    {id: 16, name: "Turn-based strategy (TBS)"},
    {id: 24, name: "Tactical"},
    {id: 25, name: "Hack and slash/Beat 'em up"},
    {id: 26, name: "Quiz/Trivia"},
    {id: 30, name: "Pinball"},
    {id: 31, name: "Adventure"},
    {id: 32, name: "Indie"}	,
    {id: 33, name: "Arcade"}
]
// with genre id 
const getResultsForGenres = async (id) => {
    try {
        const res = await axios(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=id,name,cover,category,genres,rating,summary,videos,platforms,publishers,popularity&filter[genres][eq]=${id}&order=popularity:desc&min&limit=50`, {
            method: "GET",
            headers: {
                "user-key": '1b6ecffad226137692e25260447d093a',
                "Accept": "application/json"
            }
        })
        .then(response => {
            console.log(response.data)        
        })
    
    } catch (error) {
        alert(error)
    }
}

// with search 
const getResultsForSearch = async (id) => {
    try {
        const res = await axios(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=call%20of%20duty&fields=id,name,cover,category,genres,rating,summary,videos,platforms,publishers,popularity&order=popularity:desc&min&limit=50`, {
            method: "GET",
            headers: {
                "user-key": '1b6ecffad226137692e25260447d093a',
                "Accept": "application/json"
            }
        })
        .then(response => {
            console.log(response.data)        
        })
    
    } catch (error) {
        alert(error)
    }
}



// with platforms id
const getResultsForPlatforms = async (id) => {
    try {
        const res = await axios(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/platforms/48?expand=games&order=popularity:desc&min&limit=50`, {
            method: "GET",
            headers: {
                "user-key": '1b6ecffad226137692e25260447d093a',
                "Accept": "application/json"
            }
        })
        .then(response => {
            console.log(response.data)        
        })
    
    } catch (error) {
        alert(error)
    }
}