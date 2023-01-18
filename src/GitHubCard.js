import Card from 'react-bootstrap/Card';


function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>AndrewRink</Card.Title>
        <img style={{width: "70%", height: "70%"}}src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/310971334_10158925996203030_2382718470560189847_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eJ_j2PDseRoAX9qD1-Z&_nc_ht=scontent-atl3-2.xx&oh=00_AfB0ZyHfXp2Uvg7h3Irxz2wFOhRcWuc3Xo7s-hyO6CZ5wg&oe=63CDDC88" />
        <Card.Text>
          Andrew lives near Charlotte, NC with his wife and three children.  He is excited about his new career path.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard