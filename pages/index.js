import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloHome = {/*backgroundColor: "red"*/};
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu></Menu>
                <Header></Header>
                <Timeline playlists={config.playlists}>
                    Conteudo
                </Timeline>
            </div>
        </>
        
    );
  }

  export default HomePage

  const StyledBanner = styled.div`
    img {
        display: flex;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        min-height: 60px;
        background-size: cover;
        background-repeat: no-repeat;
    }
  `

  const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;

  function Header() {
    return (
        <>
            <StyledBanner>
                <section className="banner">
                    <img src="https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhcmliZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </section>
            </StyledBanner>
            <StyledHeader>
                    <section className="user-info">
                        <img src={`https://github.com/${config.github}.png`} />
                        <div>
                            <h2>
                                {config.name}
                            </h2>
                            <p>
                                {config.job}
                            </p>
                        </div>
                    </section>
                </StyledHeader>
        </>
      );
}

function Timeline(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}