const header = () => {
        return `<div id="logo">
            <a href='/'>
            <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.COIt0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"
            alt=""
            srcset=""
            />
            </a>
            </div>

            <div id="search">
            <input id="search-input" onkeypress=search() type="text" placeholder="Search Github"/>
        </div>

        <div id="options">
            <ul id="list">
                <li>Pull Request</li>
                <li>issues</li>
                <li>Marketplace</li>
                <li><a href="explore.html">Explore</a></li>
            </ul>
        </div>
    
        <div>
            <img
            id="profile-img"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.COIt0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"
            alt=""
            srsset=""
            />
        </div>`;
     };

export default header;     