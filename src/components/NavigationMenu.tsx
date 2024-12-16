import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChartLine, Target, BookOpen, Users, Rocket } from "lucide-react";

export const MainNav = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-center mb-8">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-black hover:bg-white hover:text-black">
            <Target className="mr-2 h-4 w-4" />
            Stratégies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-black/50 to-black p-6 no-underline outline-none focus:shadow-md"
                    href="/formation"
                  >
                    <ChartLine className="h-6 w-6 text-white" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Trading Professionnel
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Découvrez nos stratégies de trading avancées et notre approche professionnelle.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    href="/formation#programme"
                  >
                    <div className="text-sm font-medium leading-none">Programme de Formation</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Formation complète pour devenir un trader professionnel.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    href="/apply"
                  >
                    <div className="text-sm font-medium leading-none">Rejoindre l'équipe</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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