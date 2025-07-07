import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminHeader } from '@/components/admin/admin-header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar>
          <main className="flex-1 p-6">
            {children}
          </main>
        </AdminSidebar>
      </div>
    </div>
  );
}

