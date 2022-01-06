import React from 'react';
import Link from 'next/link';
import MediaQuery from "react-responsive";
import { useUser } from '@auth0/nextjs-auth0';

function Header(){
  const { user, loading } = useUser();

  return (
    <>
      <MediaQuery minWidth={415}>
        <header style ={{'min-width':'1200px'}}>
          <nav style ={{marginLeft:'70%'}}>
            <ul>
              {!loading &&
                (user ? (
                  <>
                    <li>
                    <Link href="/userpage">
                      <a>ユーザー</a>
                    </Link>
                    </li>{' '}
                    <li>
                    <Link href="/api/auth/logout">
                      <a>ログアウト</a>
                    </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                    <Link href="/api/auth/login">
                      <a>ログイン</a>
                    </Link>
                    </li>
                  </>
                ))}
            </ul>
          </nav>
        </header>
      </MediaQuery>
      <MediaQuery maxWidth={414}>
        <header>
          <nav>
            <ul>
              {!loading &&
                (user ? (
                  <>
                    <li>
                    <Link href="/userpage">
                      <a>ユーザー</a>
                    </Link>
                    </li>{' '}
                    <li>
                    <Link href="/api/auth/logout">
                      <a>ログアウト</a>
                    </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                    <Link href="/api/auth/login">
                      <a>ログイン</a>
                    </Link>
                    </li>
                  </>
                ))}
            </ul>
          </nav>
        </header>
      </MediaQuery>
      <style jsx>{`
          header {
            padding: 0.05rem;
            color: #fff;
            background-color: #333;
            
          }
          nav {
            max-width: 42rem;
            margin: 1.2rem auto;
            
          }
          ul {
            display: flex;
            list-style: none;
            margin-left: 0;
            padding-left: 0;
            
          }
          li {
            margin-right: 1rem;
          }
          li:nth-child(3) {
            margin-right: auto;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
          button {
            font-size: 1rem;
            color: #fff;
            cursor: pointer;
            border: none;
            background: none;
          }
        `}</style>
      </>
  );
};

export default Header;