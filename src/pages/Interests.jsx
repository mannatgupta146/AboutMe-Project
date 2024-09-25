export function Interests() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <br/>
      <h1 style={{ fontSize: '2.5em' }}>My Interests</h1>
      <p style={{ fontSize: '1.2em' }}>Here are a few things I'm passionate about:</p>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <li style={{ fontSize: '1.5em', margin: '15px 0', textAlign: 'center', width: '80%' }}>
          • I love cooking and trying new recipes to experiment in the kitchen.
        </li>
        <li style={{ fontSize: '1.5em', margin: '15px 0', textAlign: 'center', width: '80%' }}>
          • Writing allows me to express my creativity through poems and stories.
        </li>
        <li style={{ fontSize: '1.5em', margin: '15px 0', textAlign: 'center', width: '80%' }}>
          • Exploring new places and cultures is something I genuinely enjoy.
        </li>
        <li style={{ fontSize: '1.5em', margin: '15px 0', textAlign: 'center', width: '80%' }}>
          • Traveling helps me create lasting memories and connect with diverse environments.
        </li>
        <li style={{ fontSize: '1.5em', margin: '15px 0', textAlign: 'center', width: '80%' }}>
          • I love watching movies with friends as it’s a fun way to unwind and bond.
        </li>
      </ul>
    </div>
  );
}
