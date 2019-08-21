import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ chatList }) => {
  return (
    <div>
      <header>
        <div className='header-text'>CHAT</div>
      </header>
      <div className='chat-list'>
        {chatList.map(chatEl => (
          <Link to={`/chat_room/${chatEl.id}`} key={chatEl.id}>
            <div className='chat-element' key={chatEl.id}>
              <img src={chatEl.user_image} alt={chatEl.id} />
              <div className='chat-element-right-box'>
                <div className='last-msg-time'>{chatEl.last_msg_time}</div>
                <div className='user-name'>{chatEl.user_name}</div>
                <div className='user-text'>{chatEl.text}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;