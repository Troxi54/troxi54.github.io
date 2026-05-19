import Link from "@components/base/Link";

function Contacts() {
  return (
    <section>
      <h2 className="text-3xl mb-3">📬 Contacts</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Email:{" "}
          <Link href="mailto:troxidev@gmail.com">troxidev@gmail.com</Link>
        </li>
        <li>
          Discord:{" "}
          <Link href="https://discord.com/users/789733863029997598">
            troxidev
          </Link>
        </li>
        <li>
          GitHub:{" "}
          <Link href="https://github.com/Troxi54">github.com/Troxi54</Link>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
