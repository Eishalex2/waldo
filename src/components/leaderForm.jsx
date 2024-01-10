import { useState } from "react";

const LeaderForm = ({ game, time }) => {
  const [name, setName] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch(`https://waldo-api-eishalex.fly.dev/api/leaders/${game._id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            time
          })
        });
      setName('');
      // update leaderboard
      // go to leaderboard
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="leader-form">
      <div className="form-group">
        <label htmlFor="name">Entry name: </label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <input type="hidden" name="time" value={time} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LeaderForm;