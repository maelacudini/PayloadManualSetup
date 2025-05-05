import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div>
      <h1>Homepage</h1>
      <h3>{t('greeting')}</h3>
    </div>
  );
}
