import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ChartLine, Target, BookOpen, Users, Rocket } from "lucide-react";

export const MainNav = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-center mb-8">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-900 bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all">
            <Target className="mr-2 h-4 w-4" />
            Stratégies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-orange-100 to-amber-100 p-6 no-underline outline-none focus:shadow-md"
                    href="/formation"
                  >
                    <ChartLine className="h-6 w-6 text-orange-500" />
                    <div className="mb-2 mt-4 text-lg font-medium text-gray-900">
                      Trading Professionnel
                    </div>
                    <p className="text-sm leading-tight text-gray-600">
                      Découvrez nos stratégies de trading avancées et notre approche professionnelle.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
                    href="/formation#programme"
                  >
                    <div className="text-sm font-medium leading-none text-gray-900">Programme de Formation</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      Formation complète pour devenir un trader professionnel.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
                    href="/apply"
                  >
                    <div className="text-sm font-medium leading-none text-gray-900">Rejoindre l'équipe</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      Postulez pour rejoindre notre équipe de traders.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};