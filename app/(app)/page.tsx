import { getTranslations } from "next-intl/server";
import { getCollection } from "@/utils/functions/collections";
import { ToggleLang } from "./_components/molecules/ToggleLang";
import { ToggleTheme } from "./_components/molecules/ToggleTheme";
import { Fragment } from "react";

export default async function Home() {
  const t = await getTranslations('home');
  const articles = await getCollection('article');  

  return (
    <Fragment>
      <ToggleLang />
      <ToggleTheme />

      <h1>{t('greeting')}</h1>

      <div style={{ 
        display: 'flex', flexDirection: 'column', gap: '1rem' 
      }}>
        <h2>{t('articles')}</h2>
        {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
        {articles.docs && articles.docs.map((article: any) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
