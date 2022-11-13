export function MovingText({ children }: { children: JSX.Element }) {
  return <li className='animate-moveLeft bg-clip-text bg-pale'>{children}</li>;
}
