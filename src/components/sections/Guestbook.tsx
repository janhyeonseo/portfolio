import Section from "@/components/ui/Section";

// TODO: Supabase 연결 후 방명록 목록/작성 폼으로 교체
export default function GuestbookSection() {
  return (
    <Section id="guestbook" title="Guestbook">
      <div className="rounded-xl border border-dashed border-border px-5 py-12 text-center">
        <p className="font-semibold">방명록 준비 중</p>
        <p className="mt-1 text-sm text-muted">곧 방명록을 남길 수 있도록 준비하고 있어요.</p>
      </div>
    </Section>
  );
}
