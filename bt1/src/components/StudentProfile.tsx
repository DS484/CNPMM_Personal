import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-background.jpg";

interface StudentProfileProps {
  name?: string;
  studentId?: string;
  university?: string;
  major?: string;
}

export const StudentProfile = ({
  name = "Nguyễn Đức Sang",
  studentId = "22110404",
  university = "Trường Đại học Sư phạm Kỹ thuật TPHCM",
  major = "Công nghệ Thông tin"
}: StudentProfileProps) => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/30 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <Card className="bg-gradient-card border-border/50 shadow-elegant backdrop-blur-sm relative z-10 w-full max-w-2xl">
        <div className="p-8 md:p-12 text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-block">
              <Badge
                variant="secondary"
                className="bg-primary/20 text-primary-foreground border-primary/30 px-4 py-2 text-sm font-medium"
              >
                Sinh viên
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              {name}
            </h1>
          </div>

          {/* Student Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">Mã số sinh viên</p>
                <p className="text-2xl font-mono font-bold text-primary tracking-wider">
                  {studentId}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">Chuyên ngành</p>
                <p className="text-xl font-semibold text-foreground">
                  {major}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-muted-foreground font-medium mb-2">Trường học</p>
              <p className="text-xl font-semibold text-foreground">
                {university}
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-2 pt-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse delay-300" />
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-700" />
          </div>
        </div>
      </Card>
    </div>
  );
};