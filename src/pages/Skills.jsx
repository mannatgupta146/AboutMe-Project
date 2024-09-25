export function Skills() {
  return (
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '1000px' }}>
      <p style={{ fontSize: '1.5em', margin: '10px 0' }}>
        <br/>
        <br/>
        Over time, I have developed and learned a variety of skills that enable me to contribute effectively. Here’s a look at what I bring to the table:
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px auto' }}>
        <div style={{ width: '45%', marginRight: '20px' }}>
          <h2 style={{ fontSize: '2em', textAlign: 'center' }}>Interpersonal Skills</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Creative Thinker</li>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Team management</li>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Adaptability</li>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Problem-solving</li>
          </ul>
        </div>

        <div style={{ width: '45%' }}>
          <h2 style={{ fontSize: '2em', textAlign: 'center' }}>Technical Skills</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Languages: C++, R, Python, HTML, CSS, JavaScript</li>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Libraries/Frameworks: Node.js, Lambda, Lex</li>
            <li style={{ fontSize: '1.2em', margin: '10px 0' }}>• Tools/Platforms: GitHub, VS Code, AWS, SQL, MongoDB</li>
          </ul>
        </div>
      </div>
      <h2 style={{ fontSize: '2em', margin: '20px 0' }}>Thank You, now please hire me :)</h2>
    </div>
  );
}
