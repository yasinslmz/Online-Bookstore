using ProductManagementWebApi.Controllers;
using ProductManagementWebApi.Data;
using ProductManagementWebApi.Models.Interface;

namespace ProductManagementWebApi.Models.Services
{
    public class AuthService : IAuthService
    {
        readonly ITokenService tokenService;
        ApplicationDbContext db;
        public AuthService(ITokenService _tokenService,ApplicationDbContext db)
        {
            this.db = db;
            this.tokenService = _tokenService;
        }

        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {

            UserLoginResponse response = new();

            if(String.IsNullOrEmpty(request.Username) || String.IsNullOrEmpty(request.Password) ) {
                
                throw new ArgumentNullException(nameof(request));
            }

            var user=db.User.FirstOrDefault(u=>u.userName == request.Username && u.password==request.Password);

           if(user != null)
            {
                var generateTokenInformation = await tokenService.GenerateTokenAsync(new GenerateTokenRequest
                {
                    Username = request.Username,

                });
                response.AccessTokenExpireDate = generateTokenInformation.TokenExpireDate;
                response.AuthenticateResult = true;
                response.AuthToken = generateTokenInformation.Token;
                response.email = user.email;
                response.firstName = user.firstName;
                response.lastName = user.lastName;
                response.Id = user.Id;
                response.userName = user.userName;
            }

           
            return response;

        }
    }
}
