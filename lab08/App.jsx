import React, { useState } from "react";
import { Carousel, Image, Form, Input, InputNumber, Button } from "antd";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default function App() {
    const carouselStyles = {
        width: "640px",
        border: "solid 1px #000",
        margin: "auto",
    };

    const [searchTerm, setSearchTerm] = useState("");  // Managing search term state
    const [numSongs, setNumSongs] = useState("");  // Managing number of songs state
    const [tracks, setTracks] = useState([]);  // State to hold albums
    const [loading, setLoading] = useState(false);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleNumSongs = (e) => {
        setNumSongs(e.target.value)
    }

    const fetchData = async (searchTerm, numSongs) => {
        const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
        const url = `${baseURL}?q=${encodeURIComponent(searchTerm)}&type=track&limit=${numSongs}`;

        setLoading(true);  // Start loading
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("This is the data packet", data);  // Logs the response for debugging
            setTracks(data);  // Update the state with fetched data
        } catch (error) {
            console.error("Error fetching data from Spotify:", error);
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    // Handle form submission to simulate fetching data
    const handleSubmit = () => {
        console.log("Form submitted with values:", searchTerm, numSongs);
        //setSearchTerm(values.searchTerm);  // Set search term from form input
        //setNumSongs(values.numSongs);// Set number of songs from form input
        fetchData(searchTerm, numSongs);

        // Example albums data that you want to display in the carousel
        // const albums = [
        //     {
        //         id: "6BzxX6zkDsYKFJ04ziU5xQ",
        //         name: "COWBOY CARTER",
        //         image_url: "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599",
        //         spotify_url: "https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ",
        //     },
        //     {
        //         id: "2UJwKSBUz6rtW4QLK74kQu",
        //         name: "BEYONCÉ [Platinum Edition]",
        //         image_url: "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
        //         spotify_url: "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu",
        //     },
        //     {
        //         id: "6PeoltoiWQWCyWA0JBHVGN",
        //         name: "16 CARRIAGES",
        //         image_url: "https://i.scdn.co/image/ab67616d0000b273f5220893852002a2a3078bab",
        //         spotify_url: "https://open.spotify.com/album/6PeoltoiWQWCyWA0JBHVGN",
        //     },
        //     {
        //         id: "6oxVabMIqCMJRYN1GqR3Vf",
        //         name: "Dangerously In Love",
        //         image_url: "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1",
        //         spotify_url: "https://open.spotify.com/album/6oxVabMIqCMJRYN1GqR3Vf",
        //     },
        //     {
        //         id: "2m1enA3YrMLVvR3q0MqLpL",
        //         name: "COWBOY CARTER",
        //         image_url: "https://i.scdn.co/image/ab67616d0000b2734903a9678d5664b9cd9a3fd8",
        //         spotify_url: "https://open.spotify.com/album/2m1enA3YrMLVvR3q0MqLpL",
        //     },
        // ];

        //setAlbums(albums);  // Update albums state with new data
    };
    const trackToJSX = (track) => (
        <div key={track.id} style={{ textAlign: "center", padding: "16px" }}>
            <Image src={track.album.image_url} alt={track.name} width={200} />  {/* Assuming the track object has an 'album' property with 'images' */}
            <h3>{track.name}</h3>
            <iframe
                src={`https://open.spotify.com/embed/track/${track.name}&utm_source=generator`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={track.name}
            ></iframe>
            <p>Middle 2</p>
        </div>
    );
    // Function to render each album inside the carousel
    const albumToJSX = (album) => {
        return (
            <div key={album.id} style={{ textAlign: "center", padding: "16px" }}>
                <Image src={album.image_url} alt={album.name} width={200} />
                <h3>{album.name}</h3>
                <a href={album.spotify_url} target="_blank" rel="noopener noreferrer">
                    Listen on Spotify
                </a>
            </div>
        );
    };

    return (
        <div>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <Form {...layout} onFinish={handleSubmit} initialValues={{ numSongs: 5 }}>
                <Form.Item
                    label="Search Term"
                    name="searchTerm"
                    rules={[{ required: true, message: "Please enter a search term!" }]}
                >
                    <Input
                        onChange={handleSearchTerm}
                        placeholder="e.g., Beyonce"
                        style={{ width: 400 }}
                    />
                </Form.Item>

                <p>Search Term: {searchTerm}</p>  {/* Display the current search term */}

                <Form.Item
                    label="Number of Songs"
                    name="numSongs"
                    rules={[{ required: true, message: "Please enter a number of songs!" }]}
                >
                    <Input
                        type="number"
                        min={1}
                        max={20}
                        style={{ width: "auto" }}
                        onChange={handleNumSongs}
                    />

                    <p>number of songs: {numSongs}</p>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Search
                    </Button>
                </Form.Item>
            </Form>

            {/* Conditionally render carousel or message based on album data */}
            {tracks.length > 0 ? (
                <div className="carousel-container" style={carouselStyles}>
                    <Carousel dotPosition="top" autoplay>
                        {tracks.map(track => trackToJSX(track))}  {/* Correctly map over the tracks array */}
                    </Carousel>
                    <p>middle</p>
                </div>
            ) : (
                <p>No albums to display. Please search for something!</p>
            )}
        </div>
    );
}