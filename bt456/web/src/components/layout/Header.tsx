import { User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from '@/stores/useAuth.stores';
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Header = () => {
  const user = useAuthStore((state) => state.data);
  const navigate = useNavigate();

  const handleLogOut = () => {
    useAuthStore.getState().setData(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 backdrop-blur border-b border-violet-500/30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </Button>
            <span 
              onClick={() => navigate("/home")} 
              className="text-xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition"
            >
              FashionStore
            </span>
          </div>

          {/* Actions */}
          <div>
            {user ? (
              <Popover>
                <PopoverTrigger className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                  <img
                    src={user.avatarUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name || "User")}
                    alt="avatar"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-violet-400"
                  />
                  <span className="font-medium text-white">{user.name}</span>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-48 bg-white shadow-xl rounded-lg p-2">
                  <Button 
                    variant="ghost" 
                    className="w-full flex items-center gap-2 justify-start hover:bg-violet-100 text-gray-700"
                    onClick={handleLogOut}
                  >
                    <LogOut className="h-4 w-4" /> Đăng xuất
                  </Button>
                </PopoverContent>
              </Popover>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/')} 
                className="text-white hover:bg-white/10 flex items-center gap-2"
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">Đăng nhập</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
