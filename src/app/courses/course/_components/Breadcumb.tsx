import Link from 'next/link';

type TranscriptItem = {
  time: string;
  text: string;
};


type BreadcrumbProps = {
  items: { label: string; href: string }[];
  videoUrl: string;
  transcript: TranscriptItem[];
};

export default function Breadcrumb({ items, videoUrl, transcript }: BreadcrumbProps) {
  return (
    <div>
    <nav className="text-sm border-b- text-blue-500 mb-4">
      {items.map((item, index) => (
        <span key={index}>
          <Link href={item.href}>{item.label}</Link>
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>

    <div className="relative">
      <video
        controls
        className="w-full rounded-lg shadow-lg"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="mt-4 text-black p-4 rounded-lg">
      <h4 className="text-lg font-bold mb-2">Welcome to the course</h4>
      {transcript.map((item, index) => (
        <div key={index} className="flex mb-2">
          <span className="font-semibold w-12">{item.time}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
    </div>
  );
}
