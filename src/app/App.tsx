interface Props {}

export const App = ({}: Props) => {
  return (
    <div
      className="app"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '20px',
        }}
      >
        <h3>Project template by e7f3</h3>
        <ul style={{listStylePosition: 'inside'}}>
          <li>React</li>
          <li>Typescript</li>
          <li>Webpack</li>
          <li>Eslint + Stylelint</li>
          <li>Jest</li>
          <li>Storybook</li>
        </ul>
      </div>
    </div>
  )
}
