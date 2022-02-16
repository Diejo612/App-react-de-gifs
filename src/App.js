import Search from './components/Search';
import SelectGift from './components/SelectGift';
import Giftlist from './components/Giflist';
import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState("homer thinking");
  const [gif, setGif] = useState({
    type: "gif",
    id: "a93jwI0wkWTQs",
    url: "https://giphy.com/gifs/dl-a93jwI0wkWTQs",
    slug: "dl-a93jwI0wkWTQs",
    bitly_gif_url: "http://gph.is/2cq6Bi4",
    bitly_url: "http://gph.is/2cq6Bi4",
    embed_url: "https://giphy.com/embed/a93jwI0wkWTQs",
    username: "",
    source: "http://popkey.co/m/1Z4dL-homer-back+away",
    title: "backing up homer simpson GIF",
    rating: "g",
    content_url: "",
    source_tld: "popkey.co",
    source_post_url: "http://popkey.co/m/1Z4dL-homer-back+away",
    is_sticker: 0,
    import_datetime: "2016-09-15 16:13:40",
    trending_datetime: "1970-01-01 00:00:00",
    images: {
      original: {
        height: "375",
        width: "500",
        size: "683964",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.gif&ct=g",
        mp4_size: "489365",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.mp4&ct=g",
        webp_size: "434662",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.webp&ct=g",
        frames: "29",
        hash: "f768a2f1a96aba7b587d203c15833404",
      },
      downsized: {
        height: "375",
        width: "500",
        size: "683964",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.gif&ct=g",
      },
      downsized_large: {
        height: "375",
        width: "500",
        size: "683964",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.gif&ct=g",
      },
      downsized_medium: {
        height: "375",
        width: "500",
        size: "683964",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.gif&ct=g",
      },
      downsized_small: {
        height: "224",
        width: "299",
        mp4_size: "79471",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy-downsized-small.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy-downsized-small.mp4&ct=g",
      },
      downsized_still: {
        height: "375",
        width: "500",
        size: "683964",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy_s.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy_s.gif&ct=g",
      },
      fixed_height: {
        height: "200",
        width: "267",
        size: "227287",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/200.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200.gif&ct=g",
        mp4_size: "129737",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/200.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200.mp4&ct=g",
        webp_size: "157084",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/200.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200.webp&ct=g",
      },
      fixed_height_downsampled: {
        height: "200",
        width: "267",
        size: "54535",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/200_d.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200_d.gif&ct=g",
        webp_size: "36632",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/200_d.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200_d.webp&ct=g",
      },
      fixed_height_small: {
        height: "100",
        width: "134",
        size: "81854",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/100.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100.gif&ct=g",
        mp4_size: "39268",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/100.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100.mp4&ct=g",
        webp_size: "59720",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/100.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100.webp&ct=g",
      },
      fixed_height_small_still: {
        height: "100",
        width: "134",
        size: "4410",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/100_s.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100_s.gif&ct=g",
      },
      fixed_height_still: {
        height: "200",
        width: "267",
        size: "10814",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/200_s.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200_s.gif&ct=g",
      },
      fixed_width: {
        height: "150",
        width: "200",
        size: "142986",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/200w.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200w.gif&ct=g",
        mp4_size: "77910",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/200w.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200w.mp4&ct=g",
        webp_size: "103758",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/200w.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200w.webp&ct=g",
      },
      fixed_width_downsampled: {
        height: "150",
        width: "200",
        size: "34135",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/200w_d.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200w_d.gif&ct=g",
        webp_size: "24772",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/200w_d.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200w_d.webp&ct=g",
      },
      fixed_width_small: {
        height: "75",
        width: "100",
        size: "53398",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/100w.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100w.gif&ct=g",
        mp4_size: "23834",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/100w.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100w.mp4&ct=g",
        webp_size: "38202",
        webp: "https://media0.giphy.com/media/a93jwI0wkWTQs/100w.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100w.webp&ct=g",
      },
      fixed_width_small_still: {
        height: "75",
        width: "100",
        size: "3176",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/100w_s.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=100w_s.gif&ct=g",
      },
      fixed_width_still: {
        height: "150",
        width: "200",
        size: "7609",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/200w_s.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=200w_s.gif&ct=g",
      },
      looping: {
        mp4_size: "1979204",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy-loop.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy-loop.mp4&ct=g",
      },
      original_still: {
        height: "375",
        width: "500",
        size: "31812",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy_s.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy_s.gif&ct=g",
      },
      original_mp4: {
        height: "360",
        width: "480",
        mp4_size: "489365",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy.mp4&ct=g",
      },
      preview: {
        height: "172",
        width: "229",
        mp4_size: "39617",
        mp4: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy-preview.mp4?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy-preview.mp4&ct=g",
      },
      preview_gif: {
        height: "71",
        width: "95",
        size: "49620",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy-preview.gif?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy-preview.gif&ct=g",
      },
      preview_webp: {
        height: "148",
        width: "198",
        size: "43460",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/giphy-preview.webp?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=giphy-preview.webp&ct=g",
      },
      "480w_still": {
        height: "360",
        width: "480",
        size: "683964",
        url: "https://media0.giphy.com/media/a93jwI0wkWTQs/480w_s.jpg?cid=dc96e468drcppbai88ia4fzcvxftfq8yzlb3kutyi76jo0a4&rid=480w_s.jpg&ct=g",
      },
    },
    analytics_response_payload:
      "e=Z2lmX2lkPWE5M2p3STB3a1dUUXMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kYzk2ZTQ2OGRyY3BwYmFpODhpYTRmemN2eGZ0ZnE4eXpsYjNrdXR5aTc2am8wYTQmY3Q9Zw",
    analytics: {
      onload: {
        url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWE5M2p3STB3a1dUUXMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kYzk2ZTQ2OGRyY3BwYmFpODhpYTRmemN2eGZ0ZnE4eXpsYjNrdXR5aTc2am8wYTQmY3Q9Zw&action_type=SEEN",
      },
      onclick: {
        url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWE5M2p3STB3a1dUUXMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kYzk2ZTQ2OGRyY3BwYmFpODhpYTRmemN2eGZ0ZnE4eXpsYjNrdXR5aTc2am8wYTQmY3Q9Zw&action_type=CLICK",
      },
      onsent: {
        url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWE5M2p3STB3a1dUUXMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kYzk2ZTQ2OGRyY3BwYmFpODhpYTRmemN2eGZ0ZnE4eXpsYjNrdXR5aTc2am8wYTQmY3Q9Zw&action_type=SENT",
      },
    },
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const key = "RPtacaw5MXBnnOFRDdNvb54GjjSc9x03";
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=15&offset=0&rating=g&lang=en`;
    fetch(endpoint).then(response => response.json()).then(data => setResults(data.data))
  },[query])

  return (
    <div>
      <div className="left-scene">
        <Search query={query} setQuery={setQuery} />
        <SelectGift gif={gif} />
      </div>
      <div className="right-scene">
        <Giftlist results={results} setGif={setGif} />
      </div>
    </div>
  );
}

export default App;
