export interface IGameFree {
    source:   string;
    gameList: GameListElement[] | PurpleGameList;
}

export interface GameListElement {
    id:                     number;
    title:                  string;
    thumbnail:              string;
    short_description:      string;
    game_url:               string;
    genre:                  Genre;
    platform:               Platform;
    publisher:              string;
    developer:              string;
    release_date:           string;
    freetogame_profile_url: string;
}

export enum Genre {
    ActionRPG = "Action RPG",
    Arpg = "ARPG",
    BattleRoyale = "Battle Royale",
    Card = "Card",
    CardGame = "Card Game",
    Fantasy = "Fantasy",
    Fighting = "Fighting",
    GenreMMORPG = " MMORPG",
    GenreMoba = "Moba",
    MMORPG = "MMORPG",
    Mmo = "MMO",
    Moba = "MOBA",
    Racing = "Racing",
    Shooter = "Shooter",
    Social = "Social",
    Sports = "Sports",
    Strategy = "Strategy",
}

export enum Platform {
    PCWindows = "PC (Windows)",
    PCWindowsWebBrowser = "PC (Windows), Web Browser",
    WebBrowser = "Web Browser",
}

export interface PurpleGameList {
    freeGames: FreeGames;
}

export interface FreeGames {
    current:  Current[];
    upcoming: Current[];
}

export interface Current {
    title:                string;
    id:                   string;
    namespace:            string;
    description:          string;
    effectiveDate:        Date;
    offerType:            OfferType;
    expiryDate:           null;
    status:               Status;
    isCodeRedemptionOnly: boolean;
    keyImages:            KeyImage[];
    seller:               Seller;
    productSlug:          string;
    urlSlug:              string;
    url:                  null;
    items:                Item[];
    customAttributes:     CustomAttribute[];
    categories:           Category[];
    tags:                 Tag[];
    catalogNs:            CatalogNS;
    offerMappings:        any[];
    price:                Price;
    promotions:           Promotions | null;
}

export interface CatalogNS {
    mappings: Mapping[];
}

export interface Mapping {
    pageSlug: string;
    pageType: PageType;
}

export enum PageType {
    ProductHome = "productHome",
}

export interface Category {
    path: Path;
}

export enum Path {
    Applications = "applications",
    Freegames = "freegames",
    Games = "games",
    GamesEdition = "games/edition",
    GamesEditionBase = "games/edition/base",
}

export interface CustomAttribute {
    key:   Key;
    value: string;
}

export enum Key {
    COMEpicgamesAppBlacklist = "com.epicgames.app.blacklist",
    COMEpicgamesAppProductSlug = "com.epicgames.app.productSlug",
    DeveloperName = "developerName",
    PublisherName = "publisherName",
}

export interface Item {
    id:        string;
    namespace: string;
}

export interface KeyImage {
    type: Type;
    url:  string;
}

export enum Type {
    CodeRedemption340X440 = "CodeRedemption_340x440",
    DieselStoreFrontTall = "DieselStoreFrontTall",
    DieselStoreFrontWide = "DieselStoreFrontWide",
    FeaturedMedia = "featuredMedia",
    OfferImageTall = "OfferImageTall",
    OfferImageWide = "OfferImageWide",
    ProductLogo = "ProductLogo",
    Thumbnail = "Thumbnail",
}

export enum OfferType {
    BaseGame = "BASE_GAME",
}

export interface Price {
    totalPrice: TotalPrice;
    lineOffers: LineOffer[];
}

export interface LineOffer {
    appliedRules: AppliedRule[];
}

export interface AppliedRule {
    id:              string;
    endDate:         Date;
    discountSetting: AppliedRuleDiscountSetting;
}

export interface AppliedRuleDiscountSetting {
    discountType: string;
}

export interface TotalPrice {
    discountPrice:   number;
    originalPrice:   number;
    voucherDiscount: number;
    discount:        number;
    currencyCode:    CurrencyCode;
    currencyInfo:    CurrencyInfo;
    fmtPrice:        FmtPrice;
}

export enum CurrencyCode {
    Usd = "USD",
}

export interface CurrencyInfo {
    decimals: number;
}

export interface FmtPrice {
    originalPrice:     string;
    discountPrice:     string;
    intermediatePrice: string;
}

export interface Promotions {
    promotionalOffers:         PromotionalOffer[];
    upcomingPromotionalOffers: PromotionalOffer[];
}

export interface PromotionalOffer {
    promotionalOffers: PromotionalOfferPromotionalOffer[];
}

export interface PromotionalOfferPromotionalOffer {
    startDate:       Date;
    endDate:         Date;
    discountSetting: PromotionalOfferDiscountSetting;
}

export interface PromotionalOfferDiscountSetting {
    discountType:       string;
    discountPercentage: number;
}

export interface Seller {
    id:   string;
    name: string;
}

export enum Status {
    Active = "ACTIVE",
}

export interface Tag {
    id: string;
}
