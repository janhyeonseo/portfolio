import { profile } from "@/data/profile";
import { copyrightYear } from "@/data/site";

export default function ContactSection() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-border bg-surface sm:scroll-mt-20">
      <div className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact</h2>
        <dl className="mt-8 space-y-3">
          <div className="flex flex-wrap gap-x-4">
            <dt className="w-16 text-muted">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="font-medium hover:text-accent">
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-x-4">
            <dt className="w-16 text-muted">GitHub</dt>
            <dd className="min-w-0 break-all">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent">
                {profile.github.replace("https://", "")}
              </a>
            </dd>
          </div>
        </dl>
        <p className="mt-12 text-sm text-muted">
          © {copyrightYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
