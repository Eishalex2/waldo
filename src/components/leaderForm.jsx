import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import GameContext from '../context';

const LeaderForm = ({ gameId, time }) => {
  const [username, setUsername] = useState('');
  let navigate = useNavigate();
  const { updateLeaders, setUpdateLeaders } = useContext(GameContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`https://waldo-api-eishalex.fly.dev/api/leaders/${gameId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username,
            completion_time: time
          })
        });
      if (response.status === 200) {
        setUsername('');
        setUpdateLeaders(!updateLeaders);
        navigate(`/leaders/${gameId}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="leader-form">
      <div className="form-group">
        <label htmlFor="username">Entry name: </label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <input type="hidden" name="completion_time" value={time} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LeaderForm;