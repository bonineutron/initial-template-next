import styles from './home-template.module.scss';

export function HomeTemplate() {
   return (
      <div className='homeTemplate flex flex-col items-center'>
         <header>topbar</header>
         <main>main</main>
         <footer>footer</footer>
      </div>
   );
}
